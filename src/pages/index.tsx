import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";
import {
  Box,
  LinkBox,
  LinkOverlay,
  Grid,
  Link,
  UnorderedList,
  ListItem,
  Alert,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Index() {
  return (
    <main>
      <Grid gap={4}>
        <Box color={"64C8EF"} pt={4}>
          <LinkBox
            borderWidth="2px"
            rounded="lg"
            borderColor={"blackAlpha.600"}
            backgroundColor={"#FAC00F"}
            p={3}
          >
            <Heading pt={2} pb={2}>
              <LinkOverlay href="/calculation" color="blackAlpha.800">
                与ダメージ計算
              </LinkOverlay>
            </Heading>
            <Text>相手に与えるダメージ量を計算しよう!!</Text>
          </LinkBox>
        </Box>
        <Box color={"64C8EF"}>
          <LinkBox
            borderWidth="2px"
            rounded="lg"
            borderColor={"blackAlpha.600"}
            backgroundColor={"#FAC00F"}
            p={3}
          >
            <Heading pt={2} pb={2}>
              <LinkOverlay href="/question">よくある質問</LinkOverlay>
            </Heading>
            <Text>問い合わせがよくある類の質問を載せています</Text>
          </LinkBox>
        </Box>

        <Box p={2}>
          <Box>
            <Box p={2}>
              <Heading color={"#F8784A"}>このアプリについて</Heading>
            </Box>
          </Box>

          <Box
            backgroundColor={"blackAlpha.100"}
            borderColor={"blackAlpha.600"}
            rounded="lg"
            p={4}
          >
            <Text>
              僕のヒーローアカデミア
              ウルトラインパクトの与ダメージ計算を行うアプリです。みなさんは、このような疑問をもったことはありませんか？
            </Text>
            <Box pt={2} pb={2}>
              <Text>
                疑問1)
                新しいキャラクターのアクションスキルはどのくらい与ダメージが出るの??
              </Text>
              <Text>
                疑問2) どのメモリーを付けたら与ダメージが大きくなるの??
              </Text>
            </Box>
            <Text>
              このアプリでは、キャラクターのステータスなどを入力することで、与ダメージを計算することができます。
              アリーナやサークル祭でのバトルで、与ダメージを計算して勝利を掴みましょう!!
            </Text>
            <Box pt={1} pb={1}>
              <Text color={"#F8784A"}>
                このアプリは、公式アプリではありません。計算される与ダメージの結果は、正確ではない場合があります。
              </Text>
            </Box>
          </Box>
        </Box>

        <Box p={2}>
          <Box>
            <Box p={2}>
              <Heading color={"#F8784A"}>
                与ダメージ計算に関する基礎知識
              </Heading>
            </Box>
          </Box>

          <Box
            backgroundColor={"blackAlpha.100"}
            borderColor={"blackAlpha.600"}
            rounded="lg"
            p={4}
          >
            <Text>
              与ダメージの計算は基本的には、以下の要素によって決まります。
            </Text>
            <Box p={2}>
              <UnorderedList fontSize="sm">
                <ListItem>キャラクターのステータス</ListItem>

                <ListItem>アクションスキルのダメージ率</ListItem>
                <ListItem>味方キャラクターに付与されているバフ</ListItem>
                <ListItem>敵キャラクターに付与されているバフ</ListItem>
                <UnorderedList fontSize="sm"></UnorderedList>
                <ListItem>敵キャラクターに付与されているデバフ</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Box pt={1} pb={1}>
                <Text color={"#F8784A"}>キャラクターのステータスについて</Text>
              </Box>
              <Text>
                キャラクターのステータスとは、以下のステータスのことで、これらの合計値が基礎的な与ダメージの元となります。
              </Text>
              <Box p={2}>
                <UnorderedList fontSize="sm">
                  <ListItem>パワー</ListItem>
                  <ListItem>アドバンスパワー</ListItem>
                  <ListItem>メモリーのパワー</ListItem>
                </UnorderedList>
              </Box>
              <Text>各ステータスは以下の画面から確認することができます。</Text>
              <Box p={4}>
                <Image
                  src="/images/character.png"
                  borderRadius="lg"
                  alt="Character"
                />
              </Box>
              <Box p={4}>
                <Image
                  src="/images/memory.png"
                  borderRadius="lg"
                  alt="Memory"
                />
              </Box>
            </Box>

            <Box>
              <Box pt={1} pb={1}>
                <Text color={"#F8784A"}>アクションスキルのダメージ率</Text>
              </Box>
              <Text>
                アクションスキルに設定されているダメージの率です。以下の画面から確認することができます。
              </Text>
              <Box p={4}>
                <Image src="/images/skill.png" borderRadius="lg" alt="Skill" />
              </Box>
            </Box>

            <Box>
              <Box pt={1} pb={1}>
                <Text color={"#F8784A"}>
                  味方キャラクターに付与されているバフ
                </Text>
              </Box>
              <Text>与ダメージの計算に使用されるバフは以下です。</Text>
              <Box p={2}>
                <UnorderedList fontSize="sm">
                  <ListItem>パワーアップ</ListItem>
                  <ListItem>スキル威力アップ</ListItem>
                  <ListItem>アクションスキル威力アップ</ListItem>
                  <ListItem>クリティカル威力アップ</ListItem>
                </UnorderedList>
              </Box>
              <Text>
                適用されている各バフは以下の画面から確認することができます。
              </Text>
              <Box p={4}>
                <Image
                  src="/images/status.png"
                  borderRadius="lg"
                  alt="Status"
                />
              </Box>
            </Box>

            <Box>
              <Box pt={1} pb={1}>
                <Text color={"#F8784A"}>
                  敵キャラクターに付与されているバフ
                </Text>
              </Box>
              <Text>
                与ダメージの計算に使用されるバフは以下です。適用されている各バフは、「味方キャラクターに付与されているバフ」と同じ画面で確認できます。
              </Text>
              <Box p={2}>
                <UnorderedList fontSize="sm">
                  <ListItem>デフェンスアップ</ListItem>
                  <ListItem>ダメージカット</ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box>
              <Box pt={1} pb={1}>
                <Text color={"#F8784A"}>
                  敵キャラクターに付与されているデバフ
                </Text>
              </Box>
              <Text>
                与ダメージの計算に使用されるデバフは以下です。適用されている各バフは、「味方キャラクターに付与されているバフ」と同じ画面で確認できます。
              </Text>
              <Box p={2}>
                <UnorderedList fontSize="sm">
                  <ListItem>デフェンスダウン</ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box>
              <Box pt={2} pb={2}>
                <Text color={"#F8784A"}>与ダメージの計算式</Text>
              </Box>
              <Box pb={2}>
                <Text>
                  はじめにパワー合計値を計算します。この値は、ダメージ計算の基礎となる値です。
                </Text>
                <Box pt={2} pb={2}>
                  <Alert status="warning">
                    <Text>
                      パワー合計値 = キャラクターパワー +
                      キャラクターアドバンスパワー + メモリーパワー
                    </Text>
                  </Alert>
                </Box>
              </Box>

              <Text>
                次に通常攻撃の与ダメージを計算します。謎の定数は気にしなくても大丈夫です。
              </Text>
              <Box pt={2} pb={2}>
                <Alert status="warning">
                  <Text>
                    通常攻撃の与ダメージ = パワー合計値 * パワーアップ /
                    (ディフェンスアップ + ディフェンスダウン) * (1 -
                    ダメージカット) / 謎の定数
                  </Text>
                </Alert>
              </Box>

              <Text>最後にアクションスキル威力の与ダメージを計算します。</Text>
              <Box pt={2} pb={2}>
                <Alert status="warning">
                  <Text>
                    アクションスキル威力の与ダメージ = 通常攻撃の与ダメージ *
                    アクションスキルダメージ率 * スキル威力アップ *
                    アクションスキル威力アップ
                  </Text>
                </Alert>
              </Box>

              <Text>
                上記の与ダメージ計算の記載に関する注意事項です。一部、わかりやすさを優先して正確ではない記載をしています。需要はないと思いますが、正確な計算式を知りたい方は、お問合せください。
              </Text>
            </Box>

            <Box pt={2} pb={2}>
              <Text>
                与ダメージの計算式がわかったので、実際に{" "}
                <Link
                  color="#FAC00F"
                  href={"/calculation"}
                  textDecoration={"underline"}
                >
                  与ダメージ計算
                </Link>{" "}
                で計算してみましょう。
              </Text>
            </Box>
          </Box>
        </Box>

        <Box p={2}>
          <Box>
            <Box p={2}>
              <Heading color={"#F8784A"}>開発者について</Heading>
            </Box>
          </Box>

          <Box
            backgroundColor={"blackAlpha.100"}
            borderColor={"blackAlpha.600"}
            rounded="lg"
            p={4}
          >
            <Text>
              改善要望・ご質問・与ダメージ計算の結果に間違いがある場合は DM
              等でご連絡頂けると嬉しいです{" "}
            </Text>
            <Text>
              <Link
                color="#FAC00F"
                href={"https://twitter.com/h_surround"}
                textDecoration={"underline"}
                isExternal
              >
                My X (Twitter) Account
              </Link>
            </Text>

            {/*  */}
          </Box>
        </Box>
      </Grid>
    </main>
  );
}
