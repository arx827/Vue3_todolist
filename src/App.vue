<template>
  <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div> -->
  <!-- <router-view/> -->
  <h1 class="title">TODO LIST</h1>
  <div class="main">
    <!-- 顯示區 -->
    <ul class="eslist-showWrap" v-if="showData.length">
      <li
        class="eslist-show__list d-flex"
        v-for="item in showData"
        :key="item.id"
      >
        <label
          class="eslist-show__label d-flex"
          :class="{ 'eslist-show--edit': item.edit }"
          :for="`checkList_${item.id}`"
        >
          <input
            class="eslist-show__checkbox"
            type="checkbox"
            :id="`checkList_${item.id}`"
          />
          <i class="eslist-show__checkbox__style"></i>
          <p class="eslist-show__text">
            <span>{{ item.showText }}</span>
          </p>
          <input
            class="eslist-show__textInput"
            type="text"
            v-model="item.showText"
            @keypress.enter="editClose(item.id)"
            @blur="editClose(item.id)"
            :id="`checkList_edit_${item.id}`"
          />
        </label>
        <button
          class="eslist-show__btn align-self-center"
          @click="editToggle(item, `checkList_edit_${item.id}`)"
        >
          編輯
        </button>
        <button
          class="eslist-show__btn eslist-show__btn-delete align-self-center"
          @click="deleteList(item.id)"
        >
          刪除
        </button>
      </li>
    </ul>
    <!-- 輸入框 -->
    <div class="eslist_editWrap d-flex">
      <input
        class="edit__input"
        type="text"
        v-model="editInput"
        placeholder="請輸入欲新增的清單"
        @keypress.enter="addList"
        ref="editBox"
      />
      <button class="edit__button" @click="addList">NEW</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, nextTick } from "vue";
export default {
  name: "app",
  setup() {
    const editBox = ref(null); // 點擊新增後，focus 輸入框，對應ref="editBox"的input
    let editInput = ref("");
    const showData = reactive([]);

    function addList() {
      const timestamp = Date.now();
      showData.push({
        id: timestamp,
        showText: editInput.value,
        done: false,
        edit: false,
      });
      editInput.value = "";
      editBox.value.focus();
    }

    function deleteList(id) {
      let $that = showData.filter((item) => {
        return item.id == id;
      })[0];
      showData.splice(showData.indexOf($that), 1);
    }

    function editToggle(item, input) {
      showData.map((dataitem) => {
        if (dataitem.id == item.id) {
          dataitem.edit = true;
        }
      });
      nextTick(() => {
        // focus 需在nextTick才會生效
        if (item.edit) {
          document.getElementById(input).focus();
          // document.getElementById(input).select();
        }
      });
    }

    function editClose(id) {
      showData.map((item) => {
        if (item.id == id) {
          item.edit = false;
        }
      });
    }
    return {
      editInput,
      showData,
      addList,
      deleteList,
      editToggle,
      editClose,
      editBox,
    };
  },
};
</script>

<style lang="scss">
@import "@assets/all.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: lighten($COLOR-MAIN1, 40);
  background: linear-gradient(
    to bottom,
    lighten($COLOR-MAIN1, 40) 20%,
    $COLOR-WHITE 100%
  );
  padding: 5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 5rem;
  color: lighten($COLOR-MAIN1, 23);
  text-shadow: 0 0 1px lighten($COLOR-MAIN1, 10),
    0px 3px 3px lighten($COLOR-MAIN1, 10), 0px 7px 5px lighten($COLOR-MAIN1, 5),
    0 4px 10px lighten($COLOR-MAIN1, 10);
  line-height: 1;
  font-weight: 600;
}

.main {
  position: relative;
  padding: 50px 10px;
  @include flex(1);
}

// 輸入框
.eslist_editWrap {
  position: relative;
  max-width: 500px;
  margin: 0 auto 10px;
  background: lighten($COLOR-MAIN1, 25);
  padding: 25px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 0px darken($COLOR-MAIN1, 10),
    0 10px 10px 5px darken($COLOR-MAIN1, 20);
}

.edit__input {
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 0;
  width: 0;
  @include flex(1);
  box-shadow: 0 -3px 2px darken($COLOR-MAIN1, 10);
  color: $COLOR-GRAY-70;
  &::placeholder {
    color: $COLOR-GRAY-AAA;
  }
}

.edit__button {
  background: darken($COLOR-MAIN2, 5);
  color: lighten($COLOR-MAIN2, 40);
  border-radius: 8px;
  border: 0;
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: 0 5px 0 darken($COLOR-MAIN2, 30),
    0 7px 6px 1px darken($COLOR-MAIN2, 40);
  transform: translateY(-5px);
  font-weight: 600;
  margin-left: 20px;
  &:hover {
    color: lighten($COLOR-MAIN1, 40);
    box-shadow: 0 5px 0 darken($COLOR-MAIN2, 30),
      0 7px 6px 1px darken($COLOR-MAIN2, 40);
    text-shadow: 0px 0px 7px darken($COLOR-MAIN1, 20);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 darken($COLOR-MAIN1, 10),
      0 1px 1px 1px darken($COLOR-MAIN1, 20),
      0 1px 3px 1px darken($COLOR-MAIN1, 20);
  }
}

// 顯示區
.eslist-showWrap {
  position: relative;
  min-height: 85px;
  max-width: 460px;
  margin: 0 auto;
  background: #fff;
  box-shadow: inset 0 -6px 6px -3px darken($COLOR-MAIN1, 10),
    0 0 5px rgba(darken($COLOR-MAIN1, 10), 60%);
  padding-bottom: 30px;
}

.eslist-show__list {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.eslist-show__label {
  @include flex(1, 0);
  cursor: pointer;
}

.eslist-show__checkbox__style {
  position: relative;
  margin: 5px;
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: block;
  }
}

.eslist-show__textInput {
  @include flex(1, 0);
  text-align: left;
  font-size: 16px;
  line-height: 1.2;
  padding: 5px;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid $COLOR-GRAY-DD;
  display: none;
}

.eslist-show__text {
  @include flex(1, 0);
  text-align: left;
  font-size: 16px;
  line-height: 1.2;
  margin: 6px 11px;
}

.eslist-show__checkbox {
  display: none;
  &:checked {
    ~ .eslist-show__checkbox__style {
      &::after {
        content: "";
        display: block;
        width: 8px;
        height: 13px;
        border-width: 0 3px 3px 0;
        border-style: solid;
        border-color: lighten($COLOR-MAIN3, 25);
        transform: rotate(40deg);
        position: absolute;
        top: 1px;
        left: calc((100% - 8px) / 2);
      }
    }
    ~ .eslist-show__text {
      color: lighten($COLOR-MAIN3, 25);
      text-decoration: line-through;
      span {
        color: $COLOR-GRAY-AAA;
      }
    }
  }
}

.eslist-show__btn {
  border: 0;
  background: darken($COLOR-MAIN2, 5);
  color: #fff;
  opacity: 90%;
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 2px 4px darken($COLOR-MAIN2, 20);
  &:hover {
    background: darken($COLOR-MAIN2, 10);
    opacity: 1;
  }
  &:active {
    box-shadow: 0 1px 2px darken($COLOR-MAIN2, 10);
    transform: translateY(1px);
  }
  & + & {
    margin-left: 5px;
  }
}

.eslist-show__btn-delete {
  background: lighten($COLOR-MAIN3, 35);
  box-shadow: 0 2px 4px darken($COLOR-MAIN3, 10);
  opacity: 50%;
  &:hover {
    background: lighten($COLOR-MAIN3, 10);
  }
  &:active {
    box-shadow: 0 1px 2px darken($COLOR-MAIN3, 10);
  }
}

.eslist-show--edit {
  .eslist-show__text {
    display: none;
  }
  .eslist-show__textInput {
    display: block;
  }
}
</style>