<template>
  <div class="wrap">
    <div class="comment">
      <h4>留言板</h4>
      <textarea v-model="message" placeholder="谈谈你的看法"></textarea>
    </div>
    <button class="btn" @click="handleBtn">BTN</button>
    <div class="text">
      <h4>所有留言</h4>
      <ul>
        <li v-for="(msg, i) in messageList" :key="i">
          <p>{{ msg }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messageList: []
    }
  },
  methods: {
    handleBtn() {
      if (this.message.trim() !== '') {
        this.messageList.push(this.message.trim())
      } else {
        console.log('输入文字')
      }

      this.message = ''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrap {
  width: 560px;
  height: auto;
  margin: 100px auto;
  /* 盒子阴影 */
  box-shadow: 0 0 10px #000;
}

.comment {
  height: 180px;
}

.comment h4 {
  padding-left: 20px;
  font-size: 30px;
  margin: 20px 0;
}

.comment textarea {
  width: 100%;
  height: 100px;
}

.btn {
  width: 100px;
  height: 40px;
}

ul {
  list-style-type: none;
}

ul li {
  border-bottom: 1px solid #ccc;
}

ul li p {
  padding: 20px;
}
</style>
