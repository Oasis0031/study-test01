// //비동기 함수는 try-catch로 예외 못 잡음
// // try {
// //   console.log("코드 실행")
// //   setTimeout(() => {
// //     name
// //   }, 5000)
// //   console.log("코드 실행2")
// // } catch (error) {
// //   console.log("catch로 잡음")
// // }

// //해결 방법
// try {
//   console.log("코드 실행")
//   setTimeout(() => {
//      try {
//       name
//      } catch (error) {
//       console.log("비동기 코드 오류 잡기")
//      }
//     name
//   }, 5000)
//   console.log("코드 실행2")
// } catch (error) {
//   console.log("catch로 잡음")
// }

// //서라운드 코드를 감싸고 ctrl + shift + T
// try {
//   const getDatas = async () => {
//     const response = await fetch("블라")
//     const datas = await response.json()
//   }
// } catch (err) {
  
// }


try {
  name
} catch (error) {
  console.log("예외 발생")
} finally {
  //외부의 리소스를 해제할 떄 사용
  console.log("예외가 발생해도, 발생 안 해도 반드시 실행되는 코드")
}