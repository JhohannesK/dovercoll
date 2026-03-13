import { Text } from "@/components/ui/text"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Platform, ScrollView, View } from "react-native"
import { fontWeights } from "@/lib/fonts";

function SearchPickup() {
    const insets = useSafeAreaInsets();
    return (
        <View className="flex-1 px-4" style={{ paddingTop: insets.top }}>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <Text style={{
                    fontFamily: Platform.select({
                        android: 'WixMadeforDisplay_700Bold',
                        ios: 'WixMadeforDisplay_700Bold'
                    })
                }}>Search Pickup, want to see if the font is working</Text>

            </ScrollView>
        </View >
    )
}

export default SearchPickup