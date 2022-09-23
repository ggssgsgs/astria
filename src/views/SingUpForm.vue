<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center myInfor">
        <div class="col-12 buttonForm">
          <div class="page">
            <!--不使用element UI 內建驗證的表單-->

            <div class="card inputForm">
              <h2>基本資料</h2>
              <div class="d-flex inputItem">
                <label for="">姓名</label>
                <input
                  type="text"
                  class="t1"
                  v-model="form.name.value"
                  placeholder="請輸入姓名"
                  required
                  autofocus
                />
                <div class="el-form-item__error">{{ form.name.msg }}</div>
              </div>
              <div class="d-flex inputItem radiocontent">
                <label class="l1">性別</label>

                <input
                  class="t2"
                  v-model="form.gender.value"
                  type="radio"
                  value="male"
                />
                <p class="radioTxt">Male</p>
                <input
                  class="t2"
                  v-model="form.gender.value"
                  type="radio"
                  value="female"
                />
                <p class="radioTxt">Female</p>
                <input
                  class="t2"
                  v-model="form.gender.value"
                  type="radio"
                  value="others"
                />
                <p class="radioTxt">Others</p>
              </div>
              <div class="d-flex inputItem">
                <label for="">生日</label>
                <input
                  type="date"
                  class="t1"
                  v-model="form.date.value"
                  name="getday"
                  required
                />
                <div class="el-form-item__error">{{ form.date.msg }}</div>
              </div>
              <div class="d-flex inputItem">
                <label for="">出生時間</label>
                <input
                  type="time"
                  class="t1"
                  v-model="form.time.value"
                  name="gettime"
                  required
                />
                <div class="el-form-item__error">{{ form.time.msg }}</div>
              </div>
              <div class="d-flex inputItem">
                <label for="">出生地</label>
                <select v-model="form.address.value" class="t1">
                  <option value="" disabled>-- 請選擇出生地 --</option>
                  <!--<option v-for="address in addresslist" v-on:change="setplace" :key="address" :value="address">{{address}}</option>-->
                  <option
                    v-for="address in form.addresslist"
                    :key="address"
                    :value="address"
                  >
                    {{ address }}
                  </option>
                </select>
              </div>
              <div class="d-flex inputItem">
                <label>電話</label>
                <input
                  type="text"
                  class="t1"
                  v-model="form.phone.value"
                  @change="nativeValidate(form, 'phone')"
                  placeholder="請輸入電話"
                  required
                />
                <div class="el-form-item__error">{{ form.phone.msg }}</div>
              </div>

              <div>
                <!-- 需要先做停止瀏覽器預設行為 -->
                <button @click.prevent="nativeSubmit" :disabled="status">
                  送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reg_phoneType2 } from "../utils/validate";
export default {
  mounted() {
    this.form.email.value = localStorage.getItem("myemail");
    // console.log(localStorage.getItem('myemail'));
  },
  data() {
    return {
      remsg: "",
      remsgg: "",
      form: {
        name: { value: "", msg: "" },
        gender: { value: "male", msg: "" },
        date: { value: "", msg: "" },
        time: { value: "", msg: "" },
        address: { value: "", msg: "" },
        addresslist: [
          "台北市",
          "新北市",
          "基隆市",
          "桃園市",
          "新竹市",
          "新竹縣",
          "苗栗縣",
          "台中市",
          "彰化縣",
          "南投縣",
          "雲林縣",
          "嘉義市",
          "嘉義縣",
          "台南市",
          "高雄市",
          "屏東縣",
          "宜蘭縣",
          "花蓮縣",
          "台東縣",
          "澎湖縣",
          "金門縣",
          "馬祖縣",
        ],
        phone: { value: "", msg: "" },
        email: { value: "" },
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用
    };
  },
  methods: {
    nativeValidate(target, key) {
      let checkPhone = reg_phoneType2(target.phone.value);
      const arr = [checkPhone];

      // 驗證未通過則顯示msg內的訊息
      switch (key) {
        case "phone":
          checkPhone == true
            ? (target.phone.msg = "")
            : (target.phone.msg = "手機號碼格式錯誤或未輸入");
          break;
      }
      // 用find只會撈回符合條件第一個值的特性，任何一個驗證規則沒通過就不能讓送出表單的按鈕被啟用
      let result = arr.find((item) => {
        return item == false; // 尋找array中的false
      });

      // 當滿足所有條件後，result已經找不到false，會返回一個undefined，利用來判別此時要不要啟用Button
      result == undefined
        ? (this.submitDisabled = false)
        : (this.submitDisabled = true);

      console.log("form: ", arr, result);
    },
    nativeSubmit() {
      if (!this.submitDisabled) {
        alert("進入if");
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chDate = this.form.date.value;
        let chTime = this.form.time.value;
        let chadress = this.form.address.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;

        fetch("https://astria.sutsanyuan.com/Astria_api/SecSignup", {
          method: "post",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Name: chName,
            Sex: chGender,
            Birth: chDate,
            BirthTime: chTime,
            BirthPlace: chadress,
            Phone: chPhone,
            Email: chEmail,
          }),
        })
          .then(function (response) {
            alert("Fetch");
            return response.json();
          })
          .then((body) => {
            console.log(body);
            this.remsg = body.Status;
            this.remsgg = body.Msg;
            alert(this.remsg + this.remsgg);
            if (this.remsg != 1) {
              alert("失敗");
            } else {
              alert("成功");
              localStorage.setItem("token", "ImLogin");
              this.$router.push("/");
            }
          })
          .catch(function (err) {
            alert("Fetch失敗");
            console.log(err);
          });

        // 接下來就是進入表單下一步動作，反之阻擋住
      } else {
        alert("沒進FETCH");
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chDate = this.form.date.value;
        let chTime = this.form.time.value;
        let chadress = this.form.address.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;
        console.log(chName);
        console.log(chGender);
        console.log(chDate);
        console.log(chTime);
        console.log(chadress);
        console.log(chPhone);
        console.log(chEmail);
        console.log("表單註冊失敗");
      }
    },
  },
};
</script>

<style scoped>
.page {
  text-align: center;
}
.inputForm {
  padding: 50px 50px;
}

input {
  background: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  margin-bottom: 40px;
  padding-left: 10px;
}
select {
  background: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  margin-bottom: 40px;
  padding-left: 10px;
}
.card {
  background: rgba(255, 255, 255, 0.25);
}
label {
  width: 17%;
  letter-spacing: 1rem;
  text-align: left;
}

.t1 {
  width: 83%;
}
.t2 {
  width: 5%;
  padding-top: 20px;
}
h2 {
  margin-bottom: 40px;
  
}
button {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  color: #fff;
  border: none;

}
 p {
    color: gray;
  }

@media screen and (min-width: 992px) {
  .inputForm {
    padding: 70px 60px;
  }
  label {
    width: 10%;
    letter-spacing: 1rem;
    text-align: left;
  }

  .t1 {
    width: 90%;
  }
  input {
    margin: 0 0 60px;
  }
  select {
    margin: 0 0 60px;
  }
 
  h2 {
    margin-bottom: 60px;
  }
.row{
  margin: 0 240px;
}

}
</style>