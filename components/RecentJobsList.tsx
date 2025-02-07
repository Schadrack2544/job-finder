import { StyleSheet,View } from "react-native";
import React from "react";
import RecentJob from "./RecentJob";

type tRecentJobProps = {
  companyLogoUrl: string;
  jobPosition: string;
  salary: number;
  type: string;
  workTime: string;
  level: string;
  createdAt: Date;
};

type tRecentJobListProps = {
  jobs: Array<tRecentJobProps>;
};
const RecentJobsList: React.FC<tRecentJobListProps> = ({ jobs }) => {
  return (
    <View>
      {jobs.map((job,index) => (
        <RecentJob
          key={index}
          companyLogoUrl={job.companyLogoUrl}
          jobPosition={job.jobPosition}
          salary={job.salary}
          type={job.type}
          workTime={job.workTime}
          level={job.level}
          createdAt={job.createdAt}
        />
      ))}
    </View>
  );
};

export default RecentJobsList;

const styles = StyleSheet.create({});
