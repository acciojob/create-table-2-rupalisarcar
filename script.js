function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows")
	let cn = prompt("Input number of columns")
	let rowNumber = parseInt(rn,10)
	let colNumber = parseInt(cn,10)
	if (!isNaN(rowNumber) && !isNaN(colNumber)) {
		if(rowNumber>0 && colNumber>0){
			const mytable = document.getElementById("myTable");
			for(let i=0;i<rowNumber;i++){
				const tr= mytable.insertRow(i);
				mytable.style.borderCollapse="collapse";
				mytable.style.marginBottom="10px";
								
				for(let j=0;j<colNumber;j++){
					const td = tr.insertCell(j);
					td.textContent = `Row-${i} Column-${j}`;
					td.style.padding="10px";
				}
			}
		}else{
			alert("Please enter number of row and column")
		}
	}
}
