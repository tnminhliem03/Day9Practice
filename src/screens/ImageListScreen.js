import { FlatList } from "react-native";
import OptimizedImage from "../components/OptimizedImage";

const data = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    uri: `https://picsum.photos/id/${index + 10}/500/500`
}));

const ImageList = () => {
    const renderItem = ({ item }) => (
        <OptimizedImage uri={item.uri} />
    )

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
            windowSize={5} />
    )
}

export default ImageList;