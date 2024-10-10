import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "@/components/ProjectCard";

const nearbyProjects = [
  {
    project_id: "1",
    project_name: "To Do List",
    origin_address: "Adana",
    destination_address: "Resat Pasa, Adana",
    origin_latitude: "36.989820",
    origin_longitude: "35.321424",
    destination_latitude: "28.209583",
    destination_longitude: "83.985567",
    user_id: "1",
    developer_id: 2,
    created_at: "2024-02-05",
    developer: {
      developer_id: "2",
      first_name: "Fatih",
      last_name: "Karaşoğlu",
      profile_image_url:
        "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
      rating: "5.00",
      level: "junior",
    },
  },
  {
    project_id: "2",
    project_name: "Chat App",
    origin_address: "Antalya",
    destination_address: "Kale içi, Antalya",
    origin_latitude: "36.886862",
    origin_longitude: "30.702791",
    destination_latitude: "36.886862",
    destination_longitude: "30.702791",
    user_id: "1",
    developer_id: 1,
    created_at: "2024-09-21",
    developer: {
      developer_id: "2",
      first_name: "Albert",
      last_name: "Einstein",
      profile_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/1200px-Albert_Einstein_1947.jpg",
      rating: "4.40",
      level: "senior",
    },
  },
  {
    project_id: "3",
    project_name: "Mobile FPS Game",
    origin_address: "Eskişehir",
    destination_address: "Akcami, Eskişehir",
    origin_latitude: "39.766648",
    origin_longitude: "30.526108",
    destination_latitude: "39.766648",
    destination_longitude: "30.526108",
    user_id: "1",
    developer_id: 1,
    created_at: "2024-05-14",
    developer: {
      developer_id: "1",
      first_name: "Marie",
      last_name: "Curie",
      profile_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/640px-Marie_Curie_c1920.jpg",
      rating: "4.60",
      level: "senior",
    },
  },
  {
    project_id: "4",
    project_name: "Desktop App",
    origin_address: "Ankara",
    destination_address: "Kızılay, Ankara",
    origin_latitude: "39.924795",
    origin_longitude: "32.854179",
    destination_latitude: "39.924795",
    destination_longitude: "32.854179",
    user_id: "1",
    developer_id: 3,
    created_at: "2024-07-09",
    developer: {
      developer_id: "3",
      first_name: "Nikola",
      last_name: "Tesla",
      profile_image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/640px-Tesla_circa_1890.jpeg",
      rating: "4.90",
      level: "senior",
    },
  },
];

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={nearbyProjects?.slice(0, 5)}
        renderItem={({ item }) => <ProjectCard project={item} />}
      />
    </SafeAreaView>
  );
}
