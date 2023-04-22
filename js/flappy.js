function newElement (tagName, className) {

    const elem = document.createElement(tagName)
    elem.className=className
    return elem
}

function mother(){
    this.elemm=newElement('div','mother')
    const bodym=newElement('div','theirbody')
    this.setheight= heightm=>bodym.style.height=`${heightm}px`
    this.elemm.appendChild(bodym)
}

function father(){
    this.elemf=newElement('div','father')
    const bodyf=newElement('div','theirbody')
    this.setheight= heightf=>bodyf.style.height=`${heightf}px`
    this.elemf.appendChild(bodyf)
}

function parents(height,spacebetween,x){
    this.elemP=newElement('div','parents')

    this.parentm=new mother()
    this.parentf=new father ()

    this.elemP.appendChild(this.parentm.elemm)
    this.elemP.appendChild(this.parentf.elemf)

    this.randomspace = () => {
    const motherheight=Math.random()*(height-spacebetween)
    const fatherheight=height-motherheight-spacebetween
    this.parentm.setheight(motherheight)
    this.parentf.setheight(fatherheight)
    }

    this.getX=()=>parseInt(this.elemP.style.left.split('px')[0])
    this.setX=x=>this.elemP.style.left=`${x}px`
    this.getwidth=()=>this.elemP.clientWidth
    this.randomspace()
    this.setX(x)
}

const b= new parents (700,200,400)
document.querySelector('[wm-flappy]').appendChild(b.elemP)


