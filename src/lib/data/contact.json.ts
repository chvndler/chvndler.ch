export interface Template {
  link: string;
  type: string;
  title: string;
}
const one: Template = {
  link: 'mailto:email@example.com',
  type: 'Email',
  title: 'michael@andreuzza.com',
};
const two: Template = {
  link: 'https://twitter.com/Mike_Andreuzza',
  type: 'Twitter',
  title: 'Mike_Andreuzza',
};
const three: Template = {
  link: 'https://read.cv/join/michael_andreuzza',
  type: 'Read CV',
  title: 'michael_andreuzza',
};
export const bytype = {
  one,
  two,
  three,
};
export const contact = Object.values(bytype);
