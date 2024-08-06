import { allProjects, allBlogs, Project, Blog } from "contentlayer/generated";

export const PUBLISHED_BLOGS = allBlogs.filter((blog) => !blog.isDraft);
export const PUBLISHED_PROJECTS = allProjects.filter(
  (project) => !project.isDraft,
);

export const ALL_PROJECTS = allProjects;
export const ALL_BLOGS = allBlogs;

export interface IProjectProps extends Project {}
export interface IBlogsProps extends Blog {}

export const ALL_PUBLISHED_DOCUMENTS = [
  ...PUBLISHED_PROJECTS,
  ...PUBLISHED_BLOGS,
];
export const ALL_DOCUMENTS = [...allBlogs, ...allProjects];
