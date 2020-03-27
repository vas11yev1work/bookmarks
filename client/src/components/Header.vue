<template>
    <header>
        <div class="title">
            <router-link to="/home">
                <div class="title-wrap">
                    <h1>DevBookmarks</h1>
                    <small>v1.0</small>
                </div>
            </router-link>
        </div>
        <ul class="navigation">
            <li :key="index" class="nav-item" v-for="(item, index) in navigationList">
                <router-link :to="item.url">{{ item.title }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        props: {
            navigationList: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #FFFFFF;
        height: 70px;
        padding: 0 30px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
        border-radius: 1px;
        margin-bottom: 30px;

        .title {
            a {
                .title-wrap {
                    display: flex;
                    align-items: flex-end;
                    h1 {
                        color: #262626;
                        font-size: 32px;
                    }
                    small {
                        transform: translateY(-6px) translateX(5px);
                        font-size: 8px;
                        font-weight: 700;
                        color: #262626;
                        opacity: .4;
                        letter-spacing: 1px;
                    }
                }
            }
        }

        .navigation {
            display: flex;

            .nav-item {
                margin-right: 50px;
                font-size: 14px;
                font-weight: 500;

                a {
                    color: #262626;

                    &.router-link-active {
                        color: #339DEC;
                    }
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
