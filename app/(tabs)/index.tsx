import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import HeaderView from '@/components/HeaderView';
import MainSearch from '@/components/MainSearch';
import { ThemedText } from '@/components/ThemedText';
import RecomendationList from '@/components/RecomendationList';
import { jobs } from '@/constants/jobs';
import RecentJobsList from '@/components/RecentJobsList';
import { recentJobs } from '@/constants/recentJobs';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#3F6CDF', dark: '#1D3D47' }}
      headerComponent={<HeaderView/>}
      >
     <MainSearch/>
     <ThemedText type="title" style={styles.recomendation}>Recomendation</ThemedText>
     <RecomendationList data={jobs}/>
     <ThemedText type="title" style={styles.recomendation}>Recent Job List</ThemedText>
     <RecentJobsList jobs={recentJobs}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  recomendation: {
    marginTop: 24,
  },
});
