import React, { useState } from "react";
import Header from "../components/Header";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Archive.css";
import { BsArrowDownRightCircle } from "react-icons/bs";

function Archive() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <React.Fragment>
        <Header />
        <div className="Box">
          <div className="Alert">
            <Alert
              variant="danger"
              id="UpdateAlert"
              onClose={() => setShow(false)}
              dismissible
            >
              <Alert.Heading>正在访问的人类您好！</Alert.Heading>
              <p>
                正如您所见，这个页面还没做完。在开发期间，这里会提供 一些资源
                的临时下载。
              </p>
              <p>
                在完成 Archive
                板块的开发后，这里的部分内容将会移动至其他位置。给您带来的不便敬请谅解。
              </p>
            </Alert>
          </div>
          <div className="Main">
            <div class="row align-items-start">
              <div class="col-8 mainGridContainer">
                <h4>
                  <BsArrowDownRightCircle /> 档案列表
                  <span class="smallerTitle"> ARCHIVE LIST</span>
                </h4>
              </div>
              <div class="col sideBar"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <div className="Main">
          <div class="row align-items-start">
            <div class="col-8 mainGridContainer">
              <h4>
                <BsArrowDownRightCircle /> 档案列表
                <span class="smallerTitle"> ARCHIVE LIST</span>
              </h4>
            </div>
            <div class="col sideBar"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Archive;
