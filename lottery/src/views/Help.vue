<template>
    <div class="application">
      <div class="main">
        <h2>玩法规则</h2>
        <p>每期开出3个数字作为开奖号码，每个数字取值范围1-6（相当于摇3个骰子）。</p>
        <h2>奖励说明</h2>
        <table>
            <tr>
                <td>玩法</td>
                <td>中奖条件</td>
                <td>奖励(积分)</td>
            </tr>
            <tr>
                <td>和值</td>
                <td>猜中开奖号相加的和</td>
                <td>9-80</td>
            </tr>
            <tr>
                <td>
                    三同号<br>
                    单选
                </td>
                <td>猜中111、222、333、444、555、666中指定一个</td>
                <td>240</td>
            </tr>
            <tr>
                <td>
                    三同号<br>
                    通选
                </td>
                <td>111、222、333、444、555、666中任一个开出</td>
                <td>40</td>
            </tr>
            <tr>
                <td>
                    二同号<br>
                    单选
                </td>
                <td>猜中3个号（有2个号相同）</td>
                <td>80</td>
            </tr>
            <tr>
                <td>
                    二同号<br>
                    复选
                </td>
                <td>猜中开奖中相同的2个号</td>
                <td>15</td>
            </tr>
            <tr>
                <td>三不同号</td>
                <td>猜中3个号（各不相同）</td>
                <td>40</td>
            </tr>
            <tr>
                <td>二不同号</td>
                <td>猜中开奖中不相同的2个号</td>
                <td>8</td>
            </tr>
            <tr>
                <td>
                    三连号<br>
                    通选
                </td>
                <td>123，234，345，456任意一个开出</td>
                <td>10</td>
            </tr>
        </table>
        <h2>便捷返奖</h2>
        <p>奖励自动返还至用户账户中，可继续投注或者提现!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .application{
      background: #fafafa;
      width: 10rem;
  }
  .main {
    padding: 0.525rem 0.5688rem;
  }
  .main h2 {
    color: red;
    margin: 0.3125rem 0 0.2563rem;
    font-size: 0.4688rem;
    font-weight: 600;
  }
  .main p {
    font-size: 0.375rem;
    color: #08533c;
    margin-bottom: 0.5rem;
  }
  table{
      width: 9.022rem;
      border-collapse: collapse;
      border: 0.0313rem solid #ddd;
        color: #08533c;
  }
  table tr:nth-child(odd){
      background-color: #eee;
  }
  table tr>td{
      text-align: center;
      border-top: 0.0313rem solid #ddd;
      border-right: 0.0313rem solid #ddd;
      padding: 0.1563rem;
      height: 0.5rem;
  }
  table tr>td:nth-child(1){
      width: 2rem;
  }
  table tr>td:nth-child(2){
      width: 6rem;
  }
  table tr>td:nth-child(3){
      width: 2rem;
  }
  </style>