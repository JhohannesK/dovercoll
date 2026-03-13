import React from 'react';
import { NativeTabs } from 'expo-router/build/native-tabs';
import { THEME } from '@/lib/theme';

const { light } = THEME;

const TabLayout = () => {
  return (
    <NativeTabs
      backgroundColor={light.card}
      iconColor={{
        default: light.mutedForeground,
        selected: light.primary,
      }}
      labelStyle={{
        default: {
          color: light.mutedForeground,
          fontWeight: '500',
          fontFamily: 'WixMadeforDisplay_500Medium',
        },
        selected: {
          color: light.primary,
          fontWeight: '600',
          fontFamily: 'WixMadeforDisplay_600SemiBold',
        },
      }}
      indicatorColor={light.primary}
      rippleColor={light.primary}
      labelVisibilityMode="labeled">
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabs/home.png')}
          selectedColor={'#1B5E20'}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="schedule-pickup">
        <NativeTabs.Trigger.Label>Schedule Pickup</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabs/search.png')}
          selectedColor={'#1B5E20'}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="history">
        <NativeTabs.Trigger.Label>History</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Badge>9+</NativeTabs.Trigger.Badge>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabs/clock.png')}
          selectedColor={'#1B5E20'}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabs/user.png')}
          selectedColor={'#1B5E20'}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
