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
  EventTypeId?: string;
  templateType?: string;
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
}
