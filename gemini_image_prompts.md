# Kinia ランディングページ 画像生成プロンプト（Gemini用）

## 共通スタイル指定（全画像に追加）
```
Style: Modern flat illustration, minimal detail, dark background (#12121F),
soft pastel accent colors (light blue #4CC9F0, purple #7C8EF2, warm orange #F4A261).
No text in the image. 16:9 aspect ratio. Clean, professional, app-landing-page quality.
Japanese family context.
```

---

## 1. story_family.webp — ストーリーセクション用

**用途**: 「なぜ作ったか」セクションの挿入画像
**配置**: ストーリーテキストの途中

```
A warm, gentle illustration of a Japanese family of four (parents and two children)
sitting in a living room. Each person is holding a smartphone but NOT looking at screens -
they are looking at each other and smiling. The phones have a subtle soft glow.
The atmosphere is cozy and connected, not surveillance-like.
Soft warm lighting, dark background (#12121F), pastel accent colors.
Flat illustration style, no text. 16:9.
```

---

## 2. problem_contrast.webp — 問題提起セクション用

**用途**: 監視vs見守りの対比
**配置**: 問題提起カードの下

```
Split illustration showing contrast between two concepts:
Left side: A person looking stressed with multiple surveillance cameras and location pins
pointing at them. Cold blue tones. The person looks uncomfortable.
Right side: The same person looking relaxed and happy, with only a single gentle
notification bell icon floating nearby. Warm soft tones.
A clear visual divide between "surveillance" and "gentle watching over."
Dark background (#12121F), flat illustration style, no text. 16:9.
```

---

## 3. ui_member_list.webp — UIモックアップ用

**用途**: Kiniaのテキストベース画面の説明
**配置**: 「Kiniaの答え」セクション右側

```
A clean smartphone mockup showing a simple text-based member list interface
(NOT a map). Dark theme UI. The screen shows 3-4 family member cards with:
- Name and "5 minutes ago" timestamp
- Area name like "自宅" or "学校"
- A small status indicator (walking/still icon)
No map, no location pins on a map. Just clean text cards on a dark background.
The phone is slightly angled, floating with a subtle shadow.
Dark background (#12121F). 9:16 aspect ratio (portrait phone).
```

---

## 4. vision_safety.webp — 将来構想セクション用

**用途**: 災害時の安否確認のビジョン
**配置**: 将来構想バナーの下

```
An abstract, hopeful illustration showing the concept of "family safety connection
during disasters." A family of silhouettes connected by gentle glowing lines forming
a protective circle or network. In the background, subtle imagery of earthquake waves
or emergency signals, but the overall tone is HOPEFUL, not scary.
The family connection lines glow in warm orange (#F4A261) while the background
emergency elements are in cool blue. The message is "connected when it matters most."
Dark background (#12121F), flat illustration style, no text. 16:9.
```

---

## 5. hero_bg.webp — ヒーロー背景用（オプション）

**用途**: ヒーローセクションの背景画像（透過度高め）
**配置**: ヒーローの背景

```
Abstract, very subtle background pattern for a landing page hero section.
Soft, flowing gradient waves in dark purple (#1a1a2e) and very faint blue (#7C8EF2 at 10% opacity).
A few tiny, scattered dots of light resembling distant stars or connection nodes.
Extremely minimal - this will be used as a background with text overlay.
Must not distract from foreground text. Dark theme. 16:9.
```

---

## 生成後のファイル配置

```
kinia-website/
  images/
    app_icon.png        ← 既にコピー済み
    story_family.webp   ← Gemini生成
    problem_contrast.webp ← Gemini生成
    ui_member_list.webp ← Gemini生成
    vision_safety.webp  ← Gemini生成
    hero_bg.webp        ← Gemini生成（オプション）
```

## 画像最適化の注意
- WebP形式推奨（PNG比で60-80%軽量化）
- 幅1200px以下に縮小（GitHub Pages 1GB制限対策）
- ファイルサイズ目安: 各100-200KB以内
