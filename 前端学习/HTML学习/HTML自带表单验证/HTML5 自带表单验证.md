#HTML自带表单验证功能
##html5表单约束验证API
1.willValidate 如果元素的约束没有被符合则值为 false。
2.validate 提供了许多是否符合input标签内属性的反馈,
3.validationMessage 用于描述与元素相关约束的失败信息。
4.checkValidity() 如果元素没有满足它的任意约束，返回false，其他情况返回 true。
5.setCustomValidity() 设置自定义验证信息。
###validate 
validate属性提供了许多是否符合input标签内属性的反馈,是input元素的属性.
badInput 用户提供了一个浏览器不能转换的input
customError 是否设置了setCustomValidity()
patternMismatch 是否不符合pattern属性(正则)
rangeOverflow 是否不符合max属性(数字,超过最大值)
rangeUnderflow 是否不符合min属性(数字,小于最小值)
stepMismatch 是否不符合step属性(提交时数字精确到几位,默认是1,如果添加属性step="0.01",则提交至后台时能精确到小数点后两位,另这个属性实际是控制着type=number的上下小箭头点一下能增加多少.),基本是恒等于false.
tooLong 是否不符合maxlength,由于浏览器设置多了就输不进去,基本是恒等于false的.
tooShort 是否不符合minlength,基本是恒等于false的.
typeMismatch 是否不符合约定好的type,如email tel等
valid 上述所有都是false时会变成true
valueMissing 对应required,value空就报true.
###checkValidity()
当所有约束都满足时返回true.
###setCustomValidity() 
设置自定义验证信息.
##html5自带验证美化
要做出不一样的表单验证,需要用到一些CSS伪类.
1.:required和:optional 匹配到必填和选填的元素
2.:in-range和:out-of-range 在范围内和范围外
3.:valid和:invalid 符合表单要求的和不符合表单要求的
4.:read-only和:read-write 前者匹配input之类标签有read-only属性,或者是一些disable元素.后者匹配表单可写元素和有contenteditable属性的元素.
5.:focus得到焦点时

还要用到一些事件
1.oninput事件
2.oninvalid事件
3.onchange事件