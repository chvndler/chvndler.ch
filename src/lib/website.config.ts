const archive_projects = {
  heading: {
    full: 'Some of my archived projects.',
    partial: 'The',
    bold: 'archive.',
    tag: '© 2023. ALL RIGHTS RESERVED.',
  },
  copyright: {
    name: 'Archive',
    text: 'EVERYTHING HERE IS OPEN-SOURCE. SOME PROJECTS ARE STILL IN DEVELOPMENT, AND MAY NOT BE FULLY FUNCTIONAL.',
    tag: '© 2023. MIT LICENSE.',
  },
};

const media_projects = {
  heading: {
    full: 'Some of my films.',
    partial: 'Some of my',
    bold: 'films.',
  },
  copyright: {
    name: 'Media.Film',
    text: 'ALL MEDIA DISPLAYED ON THIS PAGE IS DESIGNED, DIRECTED, AND EDITED BY MYSELF. YOU MAY NOT REPRODUCE, MODIFY, DISTRIBUTE, OR REPUBLISH ANYTHING HERE, WITHOUT MY PRIOR WRITTEN CONSENT.',
    tag: '© 2023. ALL RIGHTS RESERVED.',
  },
};

const internet_projects = {
  heading: {
    full: 'Some of my internet projects.',
    partial: 'Internet',
    bold: 'projects.',
  },
  copyright: {
    name: 'Internet Projects',
    text: 'EVERYTHING HERE IS OPEN-SOURCE. SOME PROJECTS ARE STILL IN DEVELOPMENT, AND MAY NOT BE FULLY FUNCTIONAL.',
    tag: '© 2023. MIT LICENSE.',
  },
};

const content = {
  archive: archive_projects,
  media: media_projects,
  projects: internet_projects,
} as const;

export type Content = typeof content;

export type ContentProjects = typeof content.projects;

export { content };
