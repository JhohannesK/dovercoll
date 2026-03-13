import { View } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { LinearGradient } from 'expo-linear-gradient'
import { THEME } from '@/lib/theme'
import { RecycleIcon } from 'lucide-react-native'
import { Icon } from '../ui/icon'

const NextPickUpCard = () => {
    return (
        <View className="mt-7">
            <LinearGradient
                colors={['#1e4d28', '#3db84d', '#8dd496']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ borderRadius: 10 }}
            >
                <View className=" p-4">
                    <View className="flex-row items-center gap-2">
                        <Icon as={RecycleIcon} className="size-7 text-white" />
                        <Text className="text-white">Next Pick Up</Text>
                    </View>

                    <View className="gap-2 mt-3">
                        <View className="">
                            <Text className='text-xs text-gray-300'>Service</Text>
                            <Text className='text-white'>General Waste</Text>
                        </View>
                        <View className="">
                            <Text className='text-xs text-gray-300'>Date</Text>
                            <Text className='text-white'>Wednesday, 12th February 2026</Text>
                        </View>
                        <View className="">
                            <Text className='text-xs text-gray-300'>Address</Text>
                            <Text className='text-white'>Oko Laryea Avenue, Accra</Text>
                        </View>
                        <View className='bg-freshMint px-4 py-2 rounded-lg'>
                            <Text className='text-white'>Don't forget to place your bins out before 6:00 AM</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default NextPickUpCard