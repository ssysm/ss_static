$(function() {
	$("#works").on("click",function(event){
		let workId=$(event.target).data("workid");
		if(workId==undefined)
			return;
		$("#workId").val(workId);
		$("#workDetail").submit();
	});
	$("#pages").on("click",function(event){
		let page=$(event.target).text();
		$(event.target).attr("href","/work/?page="+page);
		$(event.target).click();
	});
});
let page=2;
let total;
$(window).scroll(function(){
	let scrollTop = $(this).scrollTop();
	let scrollHeight = $(document).height();
	let windowHeight = $(this).height();
	if (scrollTop + windowHeight == scrollHeight) {
		if(page===total)
			return;
		$.ajax({
			type: "post",
			url: "ajax",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			data: '{"workName":"","page":"' + page + '"}',
			success:function(data){
				let str="";
				for(let work of data.result){
					page=data.nowPage;
					total=data.totalPage;
					str+=`<div>
						<div class="row workbox">
							<div class="col-xs-3 workimage">
								<img src="${work.workCover}" class="workimg img-reponsive"></img>
							</div>
							<div class="col-xs-9 workdetail">
								<p  class="h3 worktitle">${work.workName}</p>
								<p class="p workdetail">${work.workSummary}</p>
								<a data-workid=${work.workId} class="h4 detailhref" href="javascript:void(0)">&nbsp;&nbsp;查看作品&nbsp;&nbsp;</a>
							</div>
						</div>
					</div>`;
				}
				$("#works").append(str);
				page++;
			}
		});
	}
})