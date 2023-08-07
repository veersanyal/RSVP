interface Avatar {
  src: string;
  size?: string;
  color?: string;
  text?: string;
}
interface MenuItem {
  to?: string;
  exact?: boolean;
  label: string;
  slot?: string;
  icon?: string;
  iconClass?: string;
  avatar?: Partial<Avatar>;
  shortcuts?: string[];
  disabled?: boolean;
  click?: Function;
}
interface EventCard {
  eventTypeId?: string;
  templateType?: string;
  imageContent?: string;
  titleContent?: string;
  descriptionContent?: string;
  when?: string;
  from?: string;
  to?: string;
  locationContent?: string;
  avatar?: Partial<Avatar>;
  image?: string;
  titleFont: ?string;
  titleColor: ?string;
  descriptionFont: ?string;
  descriptionColor: ?string;
  dateFont: ?string;
  dateColor: ?string;
  locationFont: ?string;
  locationColor: ?string;
  locationBlend?: string;
  descriptionBlend?: string;
  titleBlend?: string;
  dateBlend?: string;
  locationWeight?: string;
  descriptionWeight?: string;
  titleWeight?: string;
  dateWeight?: string;
  locationSize?: string;
  descriptionSize?: string;
  titleSize?: string;
  dateSize?: string;
  dateContent?: string;
}
