import React, { FC } from "react"
import { Box, Center, Image, Text, View } from "native-base"

type Props = { screenName: string; status: string | undefined }

export const ZuesWithMessage: FC<Props> = ({ screenName, status }) => {
  const Message = ({ screenName }: Props) => {
    switch (screenName) {
      case "home":
        return (
          <Text>
            最先端AV人工知能エンジン「AVZeus」は、貴方の好みに合ったオススメのAV女優をレコメンドしてくれる人工痴能です。
            {"\n"}
            ゼウスに好きなタイプを伝えて、ドストライクのAV女優と出会おう！
          </Text>
        )
      case "scoreSelection":
        return (
          <Text>
            下の7人のおなごの中から好き度を100点満点で入力するのじゃ。{"\n"}
            これを元におぬし好みのAV女優を教えるぞい！
          </Text>
        )
      case "scoreRecommendation":
        if (status == "loading") {
          return (
            <Text>
              お主好みの女優を計算中じゃ！
              {""}
              もうしばらく待っておくれい！
            </Text>
          )
        } else {
          return (
            <Text>
              全知全能のワシが分析したお主に最適のAV女優はこの娘らじゃ！！
              {"\n"}
              上からおすすめ順に10人ほど並べたぞい！
              {"\n"}
              FANZAに飛べるようにしてあるから楽しんでおくれい！
            </Text>
          )
        }

      default:
        return (
          <Text>
            エラーが発生しました。アプリを一度閉じてやり直してください。
          </Text>
        )
    }
  }
  return (
    <View margin={5}>
      <Center>
        <Image
          source={{
            uri: "https://dpgtkhmgfsuru.cloudfront.net/static/avzeus.png",
          }}
          alt='zeus'
          size='xl'
        />
        <Message screenName={screenName} status={status} />
      </Center>
    </View>
  )
}
