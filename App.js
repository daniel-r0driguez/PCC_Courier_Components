import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, TouchableOpacity, TextInput, Button, Alert, Share} from 'react-native';
import { Styles } from "./src/Styles/globalStyles";
import RNPickerSelect from 'react-native-picker-select';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {myColors} from "./src/Styles/colors";

const Stack = createNativeStackNavigator();

export default function App()
{
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // Store filtered data
    const [originalData, setOriginalData] = useState([]);
    const [expandedItem, setExpandedItem] = useState(null);
    const [sortingOption, setSortingOption] = useState('defaultOrder');
    const [searchQuery, setSearchQuery] = useState(''); // Store the search query


    useEffect(() => {
        // Make an API request to fetch data
        fetch('https://apps.pasadena.edu/wp-content/uploads/all-events-feed.json?ver=32')
            .then(response => response.json())
            .then(d => {
                // Create an object to store unique events based on their titles
                const uniqueEvents = {};

                // Iterate through the data and add events to the uniqueEvents object
                d.forEach(event => {
                    if (!uniqueEvents[event.title]) {
                        uniqueEvents[event.title] = event;
                    }
                });

                // Convert the unique events object back to an array
                const uniqueEventsArray = Object.values(uniqueEvents);

                // Extract image URLs if available and set event.imageURL
                uniqueEventsArray.forEach(event => {
                        event.imageURL = event.featured_image; // Set imageURL to the featured_image
                });

                setData(uniqueEventsArray);
                setOriginalData([...uniqueEventsArray]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        filterEvents();
    }, []);

    const toggleItem = (index) => {
        if (expandedItem === index) {
            setExpandedItem(null);
        } else {
            setExpandedItem(index);
        }
    };

    const sortData = (option) =>
    {
        if (option === 'defaultOrder')
        {
            setFilteredData([...originalData]);
        }
        else if (option === 'latestToDate')
        {
            setFilteredData([...filteredData].sort((a, b) => new Date(b.start) - new Date(a.start)));
        }
        else if (option === 'earliestToDate')
        {
            setFilteredData([...filteredData].sort((a, b) => new Date(a.start) - new Date(b.start)));
        }
        else if (option === 'alphabeticalTitle')
        {
            setFilteredData([...filteredData].sort((a, b) => a.title.localeCompare(b.title)));
        }
        setSortingOption(option);
    };

    // Function to filter events based on the search query
    const filterEvents = () =>
    {
        const filteredEvents = originalData.filter(event =>
            event.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredEvents);
    };

    // Handle search input changes
    const handleSearchInputChange = (text) =>
    {
        setSearchQuery(text);
        filterEvents();
    };

    // Handles the sharing button
    
    const onShare = async () => {
          try {
            const result = await Share.share({
              message:
                'Check out this article from the PCC Courier',
              subject:
                'Check out this article from the PCC Courier',
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
    };

    function HomeScreen({ navigation }) {
        const [isSidebarOpen, setSidebarOpen] = useState(false);

        const handleSidebarToggle = () => {
            setSidebarOpen(!isSidebarOpen);
            // Additional logic to open/close the sidebar as needed
        };

        return (
            <View style={Styles.container}>

                <View style={Styles.jessieMod}>
                    <TouchableOpacity onPress={handleSidebarToggle} style={Styles.sidebarButton}>
                        <Image
                            source={require('./assets/circles.png')}
                            style={Styles.sidebarIcon}
                        />
                    </TouchableOpacity>

                    <View style={Styles.sideContainer}>

                    <View style={Styles.pickerStyle}>
                        <RNPickerSelect
                            onValueChange={(value) => sortData(value)}
                            items={[
                                { label: 'Default Order', value: 'defaultOrder' },
                                { label: 'Latest to Earliest Date', value: 'latestToDate' },
                                { label: 'Earliest to Latest Date', value: 'earliestToDate' },
                                { label: 'Alphabetical Order (Title)', value: 'alphabeticalTitle' },
                            ]}
                            value={sortingOption}
                            style={{
                                inputIOS: {
                                    textAlign: 'center',
                                    color: myColors.white,
                                    fontWeight: "bold"
                                },
                            }}
                        />
                        </View>
                    </View>
                </View>
                
                
                {/*<View style={Styles.centerContainer}>*/}
                {/*    <TextInput*/}
                {/*        style={Styles.searchInput}*/}
                {/*        placeholder="Search by Title"*/}
                {/*        value={searchQuery}*/}
                {/*        onChangeText={handleSearchInputChange}*/}
                {/*    />*/}
                {/*</View>*/}

                <ScrollView contentContainerStyle={Styles.scrollViewContent}>
                    {filteredData.map((item, index) => (
                        //console.log("Image URL:", item.imageURL),
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Details', { event: item })} // Pass event data to DetailsScreen

                        >
                            {index === 0 && (
                            <View style={Styles.eventItem}>
                                <View style={Styles.titleBox}>
                                    {item.imageURL && <Image source={{ uri: item.imageURL }} style={Styles.eventImage} />}
                                    <Text style={Styles.eventTitle}>{item.title}</Text>
                                </View>

                                {expandedItem === index && (
                                    <View style={Styles.excerptBox}>
                                        <Text style={Styles.eventDate}>Date: {item.start}</Text>
                                        <Text style={Styles.eventExcerpt}>Event: {item.event_excerpt}</Text>
                                    </View>
                                )}
                            </View>

                                )}
                            {index !== 0 && (
                                <View style={Styles.eventItem}>
                                    <View style={Styles.titleBox}>
                                        {item.imageURL && <Image source={{ uri: item.imageURL }} style={Styles.eventImage} />}
                                        <Text style={Styles.eventTitle}>{item.title}</Text>
                                    </View>

                                    {expandedItem === index && (
                                        <View style={Styles.excerptBox}>
                                            <Text style={Styles.eventDate}>Date: {item.start}</Text>
                                            <Text style={Styles.eventExcerpt}>Event: {item.event_excerpt}</Text>
                                        </View>
                                    )}
                                </View>
                            )}

                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }


    function DetailsScreen({ route }) {
        const { event } = route.params; // Get the event data passed from HomeScreen

        return (
            <View style={Styles.container}>
                {event.imageURL && <Image source={{ uri: event.imageURL }} style={Styles.eventImage} />}
                <Text style={Styles.chosenTitle}>{event.title}</Text>
                <Text style={Styles.eventDate}>Date: {event.start}</Text>
                <Text style={Styles.eventExcerpt}>Event: {event.event_excerpt}</Text>
                <Button style={Styles.shareButton} onPress={onShare} title="Share This Event"/>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Courier">
                <Stack.Screen
                    name="Courier"
                    component={HomeScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: myColors.black,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerTintColor: 'white',
                        headerTitle: () => (
                            <Image
                                source={require('./assets/courierlogo.png')}
                                style={{ width: 150, height: 40, resizeMode: 'contain' }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: myColors.black,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

