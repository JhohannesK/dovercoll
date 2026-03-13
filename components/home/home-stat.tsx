import { View } from 'react-native';
import React from 'react';
import { Text } from '../ui/text';

const HomeStats = () => {
  return (
    <View className="mt-10 flex-row gap-4">
      <View className="flex-1 rounded-lg bg-white p-4">
        <Text className="dark:text-black" weight={600}>
          This Month
        </Text>
        <Text className="text-primary">200</Text>
        <Text className="text-sm dark:text-black">Pickups completed</Text>
      </View>
      <View className="flex-1 rounded-lg bg-white p-4">
        <Text className="dark:text-black" weight={600}>
          Recycled
        </Text>
        <Text className="text-primary">50kg</Text>
        <Text className="text-sm dark:text-black">This month</Text>
      </View>
    </View>
  );
};

export default HomeStats;
