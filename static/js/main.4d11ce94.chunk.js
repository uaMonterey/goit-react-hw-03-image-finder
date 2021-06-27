(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2mLrE",Modal:"Modal_Modal__2Afsb"}},22:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__Drf_A"}},23:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__FCKkB",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3U7Je"}},24:function(e,t,a){e.exports={button:"Button_button__1Oxc2"}},30:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=(a(30),a(13)),s=a(4),l=a(5),u=a(7),h=a(6),m=a(8),d=a.n(m),b=a(0),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.onSetQuery=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery),e.reset()},e.reset=function(){e.setState({searchQuery:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:d.a.searchbar,children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,children:[Object(b.jsx)("button",{onSubmit:this.handleSubmit,type:"submit",className:d.a.button,children:Object(b.jsx)("span",{className:d.a.label,children:"Search"})}),Object(b.jsx)("input",{className:d.a.input,value:this.state.searchQuery,type:"text",autoComplete:"off",autoFocus:!0,onChange:this.onSetQuery,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),y=a(11),p=a.n(y),j=document.querySelector("#modal-root"),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{onClick:this.handleBackdropClick,className:p.a.Overlay,children:Object(b.jsxs)("div",{className:p.a.Modal,children:[this.props.children,Object(b.jsx)("img",{src:"",alt:""})]})}),j)}}]),a}(n.Component),O=a(22),_=a.n(O),v=function(e){var t=e.children;return Object(b.jsx)("ul",{id:"imageGallery",className:_.a.imageGallery,children:t})},x=a(23),S=a.n(x),k=function(e){var t=e.images,a=e.onClick;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:n,alt:o,className:S.a.ImageGalleryItem__image,onClick:function(){a(r)}})},t)}))},w=a(24),I=a.n(w),C=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:I.a.button,onClick:t,children:"Load more"})},L=a(25),M=a.n(L),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(M.a,{type:"Rings",color:"#00bfff",height:100,width:100})}}]),a}(n.Component),Q=a(12),N=a.n(Q);N.a.defaults.baseURL="https://pixabay.com/api/";var P=function(e){var t=e.searchQuery,a=e.currentPage,n=e.apiKey,r=e.contentType;return N.a.get("/?q='".concat(t,"}&page=").concat(a,"&key=").concat(n,"&").concat(r,"&per_page=12"))},U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",currentPage:1,largeImageURL:"",showModal:!1,isLoading:!1,error:null,apiKey:"20675292-983eeb99019a7539d0696693a",contentType:"image_type=photo&orientation=horizontal"},e.onSubmit=function(t){e.setState({images:[],searchQuery:t,currentPage:1,error:null})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClick=function(t){e.toggleModal(),e.setState({largeImageURL:t})},e.onLoadMore=function(){var t=e.state,a=t.searchQuery,n={currentPage:t.currentPage,searchQuery:a,apiKey:t.apiKey,contentType:t.contentType};e.setState({isLoading:!0}),P(n).then((function(t){var a=t.data;console.log(n),e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(a.hits)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.querySelector("#imageGallery").scrollHeight,behavior:"smooth"})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.onLoadMore()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,n=e.largeImageURL,r=e.isLoading;return console.log(this.state.searchQuery),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{onSubmit:this.onSubmit}),t.length>0&&Object(b.jsx)(v,{children:Object(b.jsx)(k,{images:t,onClick:this.handleClick})}),r&&Object(b.jsx)(G,{}),a&&Object(b.jsx)(f,{onClose:this.toggleModal,children:Object(b.jsx)("img",{src:n,alt:""})}),t.length>0&&Object(b.jsx)(C,{onClick:this.onLoadMore})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__zjGgs",form:"Searchbar_form__1ZZH2",button:"Searchbar_button__3flyd",label:"Searchbar_label__26oPV",input:"Searchbar_input__2T97r"}}},[[70,1,2]]]);
//# sourceMappingURL=main.4d11ce94.chunk.js.map