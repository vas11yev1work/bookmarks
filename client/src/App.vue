<template>
    <div class="main-wrap">
        <div class="container">
            <div class="main-wrapper">
                <Header :navigationList="navigationList"/>
                <main>
                    <router-view/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('./components/Header')
        },
        data: () => ({
            navigationList: [
                {
                    title: 'Главная',
                    url: '/home'
                },
                {
                    title: 'Предложить закладку',
                    url: '/add-bookmark'
                },
                {
                    title: 'Контакты',
                    url: '/contacts'
                }
            ]
        })
    }
</script>

<style lang="scss">
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #F1F4F9;
    }

    .main-wrap {
        padding: 30px 0;

        .main-wrapper {

        }
    }

    .container {
        max-width: 1140px;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 1200px) {
            max-width: 960px;
        }
        @media (max-width: 992px) {
            max-width: 720px;
        }
        @media (max-width: 768px) {
            max-width: 540px;
        }
        @media (max-width: 576px) {
            max-width: 100%;
            padding: 0 16px;
        }
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
</style>
