
// eslint-disable-next-line
export default Component({
  async data() {
    return await new Promise((resolve, reject) => setTimeout(resolve, 300))
  }
})
