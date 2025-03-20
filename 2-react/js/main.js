class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("TODO: handleSubmit", this.state.searchKeyword);
  }

  handleReset() {
    // 검색 기록 삭제
    this.setState({ searchKeyword: "" });
    console.log("Reset History", this.state.searchKeyword); // setState는 항상 비동기로 동작하기 때문에 searchKeyword 초기화가 바로 반영되지 않음.

    this.setState(
      // 업데이트 함수
      () => {
        return { searchKeyword: "" };
      },
      () => {
        console.log("Reset History", this.state.searchKeyword); // setState 변경이 완료되면 호출됨.
      }
    );

    if (this.setState({ searchKeyword }) === null) {
    }
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            onReset={() => this.handleReset()}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
