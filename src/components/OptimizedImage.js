import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";

const OptimizedImage = ({ uri }) => {
    const [isLoading, setIsLoading] = useState(true);

    const imageSource = useMemo(
        () => ({ uri, cache: "force-cache" }),
        [uri]
    );

    const handleLoadEnd = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <View style={styles.container}>
            {isLoading && (
                <View style={styles.placeholder}>
                    <ActivityIndicator size="small" color="#888" />
                </View>
            )}

            <Image
                style={styles.image}
                source={imageSource}
                resizeMode="cover"
                onLoadEnd={handleLoadEnd}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 350,
        marginBottom: 20,
        backgroundColor: "#eee",
    },

    placeholder: {
        ...StyleSheet.absoluteFill,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: "100%",
        height: "100%",
    }
})

export default OptimizedImage;