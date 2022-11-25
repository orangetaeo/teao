$(function (){
	$('.summernote').summernote({
		lang: 'ko-KR',			// default: 'en-US'
		height: 342,			// set editor height
		minHeight: null,		// set minimum height of editor
		maxHeight: null,		// set maximum height of editor
		callbacks: {
			onImageUpload: function(files, editor, welEditable) {
	            for (var i = files.length - 1; i >= 0; i--) {
	            	sendFile(files[i], this);
	            }
	        }
		},
		fontNames: [ "Arial", "Arial Black", "Century", "Comic Sans MS", "Courier New", "굴림", "궁서", "돋움", "바탕", "맑은고딕", "휴먼편지체", "휴먼매직체", "휴먼엑스포", "Helvetica", "Helvetica Neue", "맑은 고딕"],
	    fontNamesIgnoreCheck: ['fontA'],
		focus: false				// set focus to editable area after initializing summernote
	});
	function sendFile(file, el) {
	    data = new FormData();
	    data.append("file", file);
	    $.ajax({
	        data : data,
	        type : "POST",
	        url : "save_image.html",
	        cache: false,
        	contentType: false,
        	enctype: 'multipart/form-data',
        	processData: false,
	        success : function(data) {
	        	console.log(data);
	        	if(data === "fail"){
	        		alert("Ooops! Your upload triggered the following error");
	        	}else{
	        		alert("성공");
	        		$(el).summernote('editor.insertImage', data);
	        	}
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	        	console.log(textStatus + " " + errorThrown);
	        }
	    });
	}
	/*$("form").on("submit", function(e){
		e.preventDefault();
	});*/
});
