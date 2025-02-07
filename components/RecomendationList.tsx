import { StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import RecomendationCard from "./RecomendationCard";

type jobType = {
  companyName: string;
  companyLogoUrl: string;
  companyLocation: string;
  jobPosition: string;
  salaryPerMonth: number;
  level: string;
  workTime: string;
  type: string;
};
type RecomendationListProps = {
  data: jobType[];
};

const RecomendationList: React.FC<RecomendationListProps> = ({ data = [] }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index: number) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item ,index}) => (
        <RecomendationCard
          index={index}
          companyName={item.companyName}
          companyLogoUrl={item.companyLogoUrl}
          companyLocation={item.companyLocation}
          jobPosition={item.jobPosition}
          salaryPerMonth={item.salaryPerMonth}
          level={item.level}
          workTime={item.workTime}
          type={item.type}
        />
      )}
    />
  );
};

export default RecomendationList;

const styles = StyleSheet.create({});
