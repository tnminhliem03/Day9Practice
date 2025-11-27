import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import PostCard from "../components/PostCard";

const ITEM_HEIGHT = 100;

const PostScreen = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPosts = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [setIsLoading]);

    const renderItem = useCallback(({ item }) => (
        <PostCard title={item.name} body={item.body} />
    ), []);

    return (
        <View>
            {isLoading && <Text>Loading...</Text>}

            <FlatList
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                initialNumToRender={10}
                getItemLayout={(data, index) => ({
                    length: ITEM_HEIGHT,
                    offset: ITEM_HEIGHT * index,
                    index,
                })}
                windowSize={5}
                removeClippedSubviews={true}
            />
        </View>
    )
}

export default PostScreen;