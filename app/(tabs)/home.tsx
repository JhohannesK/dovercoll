import { Text } from '@/components/ui/text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, ScrollView, View } from 'react-native';
import { fontWeights } from '@/lib/fonts';
import { Icon } from '@/components/ui/icon';
import { LocateIcon, MapPinIcon } from 'lucide-react-native';
import NextPickUpCard from '@/components/home/next-pick-up-card';
import HomeStats from '@/components/home/home-stat';
import QuickActions from '@/components/home/quick-actions';

function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View className="mt-4 flex-1 gap-4 px-4" style={{ paddingTop: insets.top }}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View>
          <Text className="text-sm">Good Evening, </Text>
          <Text className="text-sm" weight={700}>
            Nana Kay
          </Text>
          <View className="flex-row items-center gap-1">
            <Icon as={MapPinIcon} className="size-3" />
            <Text className="text-sm text-gray-400">Oko Laryea Avenue, Accra</Text>
          </View>
        </View>

        <NextPickUpCard />
        <HomeStats />
        <QuickActions />
      </ScrollView>
    </View>
  );
}

export default Home;
