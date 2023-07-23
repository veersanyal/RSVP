import exp from "constants";
import { eMailInputType } from '../functions/src/libs/service/src/lib/mail/service';

// create a composable function to handle image options
export const useImageOptions = (event?: String) => {
    const images: Array<string> = ['birthday-0.jpg', 'birthday-1.jpg', 'birthday-2.jpg', 'birthday-3.jpg', 'birthday-4.jpg', 'birthday-5.jpg', 'birthday-6.jpg', 'birthday-7.jpg', 'birthday-8.jpg', 'birthday-9.jpg', 'birthday-10.jpg', 'birthday-11.jpg'];
    return images;
}