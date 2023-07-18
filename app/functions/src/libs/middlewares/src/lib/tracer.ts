"use strict";
//import * as opentelemetry from "@opentelemetry/api";
//const { diag, trace, DiagConsoleLogger, DiagLogLevel } = opentelemetry;
import { diag, trace, DiagConsoleLogger, DiagLogLevel, SamplingDecision, SpanKind } from "@opentelemetry/api";
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
// import { AlwaysOnSampler } from "@opentelemetry/core";
import { TraceExporter } from "@google-cloud/opentelemetry-cloud-trace-exporter";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import {
  AlwaysOnSampler,
} from "@opentelemetry/sdk-trace-base";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

import {
  SimpleSpanProcessor,
  ConsoleSpanExporter,
} from "@opentelemetry/sdk-trace-base";
import { Resource } from "@opentelemetry/resources";
import {
  SemanticAttributes,
  SemanticResourceAttributes,
} from "@opentelemetry/semantic-conventions";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
// import DiagConsoleLogger from '@opentelemetry/api';

export function Otel(serviceName: string) {
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
    sampler: filterSampler(ignoreHealthCheck, new AlwaysOnSampler()),
  });
  provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      // Express instrumentation expects HTTP layer to be instrumented
      new HttpInstrumentation(),
      new ExpressInstrumentation(),
    ],
  });

  const exporter = new TraceExporter();

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  // Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
  provider.register();

  // return opentelemetry.trace.getTracer("api");
  return trace.getTracer("api");

}

function filterSampler(filterFn: any, parent: any) {
  return {
    shouldSample(
      ctx: any,
      tid: any,
      spanName: any,
      spanKind: any,
      attr: any,
      links: any
    ) {
      if (!filterFn(spanName, spanKind, attr)) {
        // return { decision: opentelemetry.SamplingDecision.NOT_RECORD };
        return { decision: SamplingDecision.NOT_RECORD };

      }
      return parent.shouldSample(ctx, tid, spanName, spanKind, attr, links);
    },
    toString() {
      return `FilterSampler(${parent.toString()})`;
    },
  };
}

function ignoreHealthCheck(spanName: any, spanKind: any, attributes: any) {
  return (
    // spanKind !== opentelemetry.SpanKind.SERVER ||
    spanKind !== SpanKind.SERVER ||
    attributes[SemanticAttributes.HTTP_ROUTE] !== "/_ah/healthcheck"
  );
}
