<template>
    <CardGrid>
        <LinkCard title="原开发者" href="https://github.com/HelloWRC">
            <div class="card-content">
                <img src="/avatar/HelloWRC.png"
                    alt="HelloWRC" width="80" />
                <p>HelloWRC</p>
            </div>
        </LinkCard>
        <LinkCard title="现开发者" href="https://github.com/jizilin6732">
            <div class="card-content">
                <img src="/avatar/Jizilin.jpg"
                    alt="Jinzilin" width="80" />
                <p>Jizilin6732</p>
            </div>
        </LinkCard>
        <LinkCard title="贡献者" href="https://github.com/belugaQAQ">
            <div class="card-content">
                <img src="/avatar/ClassIsBand.jpg"
                    alt="ClassIsBand" width="80" />
                <p>ClassIsband</p>
            </div>
        </LinkCard>
        <LinkCard title="特别鸣谢" href="https://github.com/Jursin">
            <div class="card-content">
                <img src="/avatar/Jursin.jpg"
                    alt="Jursin" width="80" />
                <p>Jursin</p>
            </div>
        </LinkCard>
    </CardGrid>
</template>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.card-content p {
 font-size: 1.3em;
 font-weight: 600;
}

.h1 {
  text-align: center;
}
</style>