wrapper=document.querySelector(".kyc-step-wrap");let select=document.querySelector("#el-id-9679-38").parentElement.parentElement.parentElement;const selectPopper=document.querySelector("#el-id-5614-37"),selectPopperUl=selectPopper.querySelector("ul").querySelectorAll("li"),nextStepButton=document.querySelector("#step-1"),container=document.querySelector(".info-container"),containerPopper=document.querySelector("#el-popper-container-9679"),userMenu=document.querySelector('[aria-controls="el-id-9679-1"]'),userPopper=document.querySelector(".user-center-dropdown-popper"),userPopperUL=userPopper.querySelector("#el-id-5571-1").querySelectorAll("li"),message=document.querySelector(".icon1-content"),help=document.querySelector(".center");function isHidden(e){"false"==e.getAttribute("aria-hidden")?e.setAttribute("aria-hidden","true"):e.setAttribute("aria-hidden","false")}message.addEventListener("click",e=>{window.location.href="https://seller.imetastore.io/message/mail"}),help.addEventListener("click",e=>{window.location.href="https://seller.imetastore.io/help/index"}),userPopperUL.forEach(e=>{e.addEventListener("mouseenter",t=>{e.focus()}),e.addEventListener("click",t=>{userPopperUL[0]==e?window.location.href="https://seller.imetastore.io/account/my":window.location.href="https://seller.imetastore.io/login"})});let isPopoverVisible=!1;userMenu.addEventListener("mouseenter",e=>{selectView(userPopper,userMenu,128,74),"none"==userPopper.style.display&&(isPopoverVisible=!0,animationActive(userPopper,userMenu))}),userMenu.addEventListener("mouseleave",e=>{selectView(userPopper,userMenu,128,74),isPopoverVisible=!1,sleep(200).then(()=>{isPopoverVisible||animationLeave(userPopper,userMenu)})}),userPopper.addEventListener("mouseleave",e=>{selectView(userPopper,userMenu,128,74),isPopoverVisible=!1,sleep(200).then(()=>{isPopoverVisible||animationLeave(userPopper,userMenu)})}),userPopper.addEventListener("mouseenter",e=>{isPopoverVisible=!0}),select.addEventListener("mouseup",e=>{selectView(selectPopper,select,460,80),togglePopup(selectPopper,select)}),document.addEventListener("click",e=>{handleClickOutside(selectPopper,select,e),handleClickOutside(userPopper,userMenu,e),"none"!=userPopper.style.display&&isHidden(userPopper)}),selectPopperUl.forEach(e=>{setupCustomSelectHover(selectPopperUl,e),setupCustomSelectClick(selectPopperUl,e,select,selectPopper),e.addEventListener("click",e=>{nextStepButton.classList.remove("is-disabled")})}),nextStepButton.addEventListener("click",e=>{nextStepButton.classList.contains("is-disabled")||("Personal"==select.querySelector("input").value?stepPersonal():"Company"==select.querySelector("input").value&&stepCompany())});