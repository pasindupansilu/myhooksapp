import moment from 'moment';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { getAllComments } from '../../api_services/comment_services';
import { getAllPosts } from '../../api_services/post_services';
import { getAllUsers } from '../../api_services/user_services';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { Colors } from '../../constants/Colors';
import { useAppState } from '../../CustomHooks/hooks';
import { styles } from './styles';

const Home = (props: any) => {

    const {
        navigation,
        route
    } = props;

    const [greeting, setgreeting] = useState("");

    const [counts, setCounts] = useState({
        users: 0,
        posts: 0,
        comments: 0,
    })

    useEffect(() => {
        let myInterval = setInterval(() => {
            handleGreeting();
        }, 3600000)

        return () => {
            clearInterval(myInterval);
        }

    }, []);

    useAppState(route.name)

    useLayoutEffect(() => {
        handleGreeting();
        getAllData();
    }, []);

    const getAllData = () => {
        getAllUsers().then((result: any) => {
            if (result.data) {
                let { users } = counts;
                users = result.data.length;
                counts.users = users;
                setCounts({ ...counts });
            } else {
                let { users } = counts;
                users = 0;
                counts.users = users;
                setCounts({ ...counts });
            }
        }).catch((error) => {
            console.log(error);
        })
        getAllPosts().then((result: any) => {
            if (result.data) {
                let { posts } = counts;
                posts = result.data.length;
                counts.posts = posts;
                setCounts({ ...counts });
            } else {
                let { posts } = counts;
                posts = 0;
                counts.posts = posts;
                setCounts({ ...counts });
            }
        }).catch((error) => {
            console.log(error);
        })
        getAllComments().then((result: any) => {
            if (result.data) {
                let { comments } = counts;
                comments = result.data.length;
                counts.comments = comments;
                setCounts({ ...counts });
            } else {
                let { comments } = counts;
                comments = 0;
                counts.comments = comments;
                setCounts({ ...counts });
            }
        }).catch((error) => {
            console.log(error);
        })
        console.log(counts);
    }

    const handleGreeting = () => {
        let h = parseInt(moment().format("HH"));
        if (h < 12) {
            setgreeting("Good Morning");
        } else if (h >= 12) {
            if (h <= 19) {
                setgreeting("Good Afternoon");
            } else if (h > 19) {
                setgreeting("Good Night");
            } else {
                setgreeting("Good Day");
            }
        }
    }

    const handleNavigateToUser = () => {
        navigation.navigate("users");
    }

    const handleNavigateToPosts = () => {
        navigation.navigate("Posts");
    }

    const handleNavigateToComments = () => {
        navigation.navigate("Comments");
    }

    return (
        <View style={styles.container}>
            <Header
                heading={greeting}
                headerIcon={"home"}
                iconColor={Colors.White}
            />
            <View style={{ flex: 1, width: "100%", }}>
                <ScrollView style={{ flex: 1, padding: 10 }}>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", flexShrink: 1, }}>
                        <CategoryCard
                            icon="users"
                            title="Users"
                            count={counts.users}
                            handleAction={handleNavigateToUser}
                        />
                        <CategoryCard
                            icon="brush"
                            title="Posts"
                            count={counts.posts}
                            handleAction={handleNavigateToPosts}
                        />
                    </View>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", flexShrink: 1, }}>
                        <CategoryCard
                            icon="list"
                            title="Comments"
                            count={counts.comments}
                            handleAction={handleNavigateToComments}
                        />
                    </View>
                </ScrollView>
            </View>
            <Footer
                leftIcon={""}
                middleIcon={"sync"}
                rightIcon={""}
                middleAction={getAllData}
            />
        </View>
    );
}

export default Home;
