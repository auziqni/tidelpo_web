# Tidelpo

Alat IoT Monitoring Tiang Listrik kami adalah solusi canggih dan terintegrasi yang dirancang untuk memastikan keamanan dan stabilitas tiang listrik Anda. Dengan teknologi monitoring real-time, alat ini memantau berbagai parameter penting seperti kemiringan tiang, lokasi, kelembaban tanah, dan tekanan udara di sekitar tiang listrik.

## Penggunaaan

### instalasi

#### pembantu utama

```bash
pnpm dlx shadcn-ui@latest init
pnpm i tailwind-merge

```

#### prisma

```
pnpm install prisma @prisma/client @prisma/studio
pnpm add -g dotenv-cli
npx prisma init
```

##### runnig prisma

```
npx prisma generate
npx prisma db push
npx prisma studio

"monitor": "dotenv -e .env.development -- npx prisma studio"
```
