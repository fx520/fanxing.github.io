
window.onload=function(){
	var J={
		getClass:function(className){
			return document.querySelectorAll(className);
		},
		getId:function(id){
			return document.getElementById(id);
		}
	}
	//	四种复选框
	var checkboxs=J.getClass(".product input[type=checkbox]");
	var checkAll=J.getId('checkAll');
	var checkFull=J.getId('checkFull');
	
	//1.定义全选与全不选
	/*e存的是通过实参传过来的onclick事件对象
		obj表示任一全选框
	 	otherObj表示另一个全选多选框
	 	checkBoxnum表示所有子多选框（四种商品的复选框）*/
	function Allcheck(e,obj,otherObj,checkBoxnum){
		var e=e||window.event;//IE兼容
		var target=e.target||e.srcElement;//火狐兼容
		for (var i=0;i<checkBoxnum.length;i++) {
			if(target==obj){
				checkBoxnum[i].checked=obj.checked;
			}
		}
		otherObj.checked=obj.checked;//两框保持一致	
	}
		checkAll.onclick=function(e){
			Allcheck(e,checkAll,checkFull,checkboxs);
			getTotal();//用户勾选的情况
		}
		checkFull.onclick=function(e){
			Allcheck(e,checkFull,checkAll,checkboxs);
			getTotal();
		}
		
	   	
	//2.定义获取商品总数和总价格getTotal函数
    function getTotal() {
        var selected = 0;//被选商品数量
        var price = 0;//被选商品总价
        //获得4种商品的div节点对象，也就是获得商品的种类个数
        var productObj = J.getClass('.products .product');
        //获得每种商品的多选框节点对象
        var checkboxs = J.getClass(".products input[type=checkbox]");
        //获得每种商品数量的节点对象
        var num = J.getClass(".product input[type=text]");
        //获得每种商品价格的节点对象
        var cost = J.getClass(".product .cost");
        for (var i = 0; i < productObj.length; i++) {
            if(checkboxs[i].checked) {
            	//表示已选商品的数量
                selected += parseInt(num[i].value);
                //表示已选商品的总价
                price += parseFloat(cost[i].innerHTML);
            }
        }
        //获得显示已选商品数量的<i>节点对象
        var number = J.getClass('.footer .number');
        //修改显示已选商品数量的<i>节点值
        number[0].innerHTML = selected;
        //获得显示商品总价格的<b>节点对象
        var priceTotal = J.getClass('.footer .priceTotal');
        //修改显示商品总价格的<b>节点值
        priceTotal[0].innerHTML = price.toFixed(1);
        return productObj;
    }
    //3.封装修改数量
    //obj表示+或-所在的节点对象
    //items表示四种商品所在的div节点对象
    //num表示每种商品数量所在的节点对象
    //select表示每种商品的复选框节点对象
    //subTotal表示每种商品总价所在的节点对象
    //subValue表示每种商品单价所在的节点对象
    function changeNum(obj, items, num, select, subTotal, subValue) {
        for (var j = 0; j < items.length; j++) {
            (function (j) {
                obj[j].onclick = function () {
                    var count = parseInt(num[j].value);
                    if (obj == add) {
                        num[j].value = count + 1;
                    }
                    if (obj == reduce) {
                        num[j].value = count - 1;
                        if (num[j].value < 1) {
                            num[j].value = 1;
                        }
                    }
                    if (select[j].checked) {
                        subTotal[j].innerHTML = (parseInt(subValue[j].innerHTML * 100) * num[j].value / 100).toFixed(2);
                        getTotal();
                    }
                    subTotal[j].innerHTML = (parseInt(subValue[j].innerHTML * 100) * num[j].value / 100).toFixed(2);
                }
            })(j);
        }
    }
    //获得每个商品的+节点
    var add = J.getClass(".products .add");
    //获得四种商品的div节点
    var productObj = J.getClass('.products .product');
    //获得每种商品的数量
    var val = J.getClass(".product input[type=text]");
    //获得每种商品的复选框节点对象
    var checkboxs = J.getClass(".products input[type=checkbox]");
    //获得每种商品总价的节点对象
    var cost = J.getClass(".product .cost");
    //获得每种商品单价的节点对象
    var price = J.getClass(".products .price");
    //获得每个商品的-节点
    var reduce = J.getClass('.products .reduce');
    changeNum(add, productObj, val, checkboxs, cost, price); // 点击增加数量
    changeNum(reduce, productObj, val, checkboxs, cost, price);//点击减少数量
    //点击子checkbox时，
    for (var i = 0; i < checkboxs.length; i++) 
    {
        (function (i) 
        {
            checkboxs[i].onclick = function () 
            {
                // 产品选中时 获取对应的产品的数量text中的值，赋值给number。获取对应的产品cost价的值，赋值给priceTotal
                if (this.checked) {
                    getTotal();
                } else {
                    getTotal();
                }
                //如果子全部选中，则all选中，如果子没有全部选中，all不选
                var ischecked = true;
                for (var i = 0; i < checkboxs.length; i++) {
                    if (!checkboxs[i].checked) {
                        ischecked = false;
                        break;
                    }
                }
                checkAll.checked = ischecked;
                checkFull.checked = ischecked;
                getTotal();
            }
        })(i)
    } 
    
	 	// 点击删除选中项
    	J.getClass('.footer .del')[0].onclick = function () {
        var mainPro = J.getId('products');
        var number = J.getClass('.footer .number');
        if (number[0].innerHTML == 0) {
            alert("请选择要删除的产品！");
        } else {
            var conf = confirm("确定要删除选中的产品吗？");
            if (conf == true) {
                for (var j = 0; j < checkboxs.length; j++) {
                	checkboxs=J.getClass(".products input[type=checkbox]");
                    // 如果被选中，就删除选中的行
                    if (checkboxs[j].checked) {
                        mainPro.removeChild(getTotal()[j]);
                        //防止跳出循环，从而无法删除某些商品
                        j--;
                        getTotal();
                    }
                }
            }
            getTotal();
            if (number[0].innerHTML == 0) {
                checkAll.checked = false;
                checkFull.checked = false;
            }
        }
        
    }	
    
    //结算功能的实现
//	function checkOut(){
//		var checkboxs=J.getClass(".product input[type=checkbox]");
//		for (var i=0;i<checkboxs.length;i++) {
//				if(checkboxs.checked){
//					alert("请选择商品！");
//				}
//			}
//	}
}


