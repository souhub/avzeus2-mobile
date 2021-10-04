import React, { useState, useEffect } from "react"
import { Platform } from "react-native"
import { Box, Text, Button, View, Image } from "native-base"
import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
// import { RootStackParamList } from "../../router"
import * as ImagePicker from "expo-image-picker"
import * as ImageManipulator from "expo-image-manipulator"
import axios from "axios"
import { aiAxios } from "../../../state/utils/axios"

export const ImageSelectionScreen = ({ navigation }: any) => {
  const [image, setImage] = useState<any>()
  const [url, setUrl] = useState("")

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    })

    // console.log(result)

    if (!result.cancelled) {
      setImage(result.base64)
      setUrl(result.uri)
    }
  }

  // console.log(result)
  //   const result2 = await ImageManipulator.manipulateAsync(
  //     image.localUri || image.uri,
  //     [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
  //     { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
  //   )

  return (
    <Box>
      <Button onPress={() => navigation.navigate("ScoreSelection")}>
        ScorePage
      </Button>

      <View>
        <Button onPress={pickImage}>画像を選択</Button>
      </View>

      {image && url && (
        <View>
          <Image source={{ uri: url }} size='xl' alt='selected image' />
          <Button
            onPress={() => {
              aiAxios
                .post("/img-rec", image, {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                })
                .then((res) => {
                  setUrl("")
                  setImage("")
                  console.log(res.data)
                })
            }}>
            画像送信
          </Button>
        </View>
      )}
    </Box>
  )
}
