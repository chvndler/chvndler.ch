'use client';

import React, { Component } from 'react';

import s1 from '@public/static/img/projects/htla.jpeg';

import Stories from 'react-insta-stories';
import { siteURL } from '@/lib/const';

type Story = {
  url: string;
  type: string;
  // seeMore: () => void;
};

const one: Story = {
  url: `${siteURL}/static/img/projects/htla.jpeg`,
  type: 'image',
};

const two: Story = {
  url: `${siteURL}/static/img/projects/htla.jpeg`,
  type: 'image',
};

const id = { one, two };
const stories = Object.values(id);

export const StoryComponent = () => {
  return (
    <Stories
      stories={stories}
      defaultInterval={1500}
      width={427}
      height={640}
    />
  );
};
