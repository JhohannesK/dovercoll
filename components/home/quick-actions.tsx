import { View } from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { RecycleIcon, BellIcon, AlertCircleIcon, MessageCircleIcon } from 'lucide-react-native'
import { Icon } from '../ui/icon'

const QuickActions = () => {
    return (
        <View className="mt-10">
            <Text weight={700} className='text-xl'>Quick Actions</Text>

            <View className='flex-row flex-wrap gap-4 mt-4'>
                <View style={{ width: '47%' }} className="bg-transparent border border-leaveGreen p-4 rounded-lg items-center justify-center mb-4">
                    <View className='bg-primary p-2 rounded-lg'>
                        <Icon as={RecycleIcon} className="size-7 text-white" />
                    </View>
                    <Text className="text-sm">Schedule Pick Up</Text>
                </View>
                <View style={{ width: '47%' }} className="bg-transparent border border-leaveGreen p-4 rounded-lg items-center justify-center mb-4">
                    <View className='bg-primary p-2 rounded-lg'>
                        <Icon as={BellIcon} className="size-7 text-white" />
                    </View>
                    <Text className="text-sm">News & Updates</Text>
                </View>
                <View style={{ width: '47%' }} className="bg-transparent border border-leaveGreen p-4 rounded-lg items-center justify-center mb-4">
                    <View className='bg-primary p-2 rounded-lg'>
                        <Icon as={MessageCircleIcon} className="size-7 text-white" />
                    </View>
                    <Text className="text-sm">Contact Support</Text>
                </View>
                <View style={{ width: '47%' }} className="bg-transparent border border-leaveGreen p-4 rounded-lg items-center justify-center mb-4">
                    <View className='bg-primary p-2 rounded-lg'>
                        <Icon as={AlertCircleIcon} className="size-7 text-white" />
                    </View>
                    <Text className="text-sm">Report Issue</Text>
                </View>
            </View>
        </View>
    )
}

export default QuickActions