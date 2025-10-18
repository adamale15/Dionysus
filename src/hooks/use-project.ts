import { api } from "@/trpc/react";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

const useProject = () => {
  const { data: projects } = api.project.getProjects.useQuery();
  const [selectedProjectId, setProjectId] = useLocalStorage(
    "dionysus-projectId",
    "",
  );
  const project = projects?.find((project) => selectedProjectId === project.id);
  return {
    projects,
    project,
    selectedProjectId,
    setProjectId,
  };
};

export default useProject;
