function newElement (tagName, className) {

    const elem = document.createElement(tagName)
    elem.className=className
    return elem
}

function mother(){
    this.elemm=newElement('div','mother')
    const bodym=newElement('div','theirbody')
    this.setheight= heightm=>bodym.style.height=`${heightm}px`
}

function father(){
    this.elemf=newElement('div','father')
    const bodyf=newElement('div','theirbody')
    this.setheight= heightf=>bodyf.style.height=`${heightf}px`
}

function parents(height,spacebetween,x){
    this.elemP=newElement('div','parents')

    this.parentm=new mother(true)
    this.parentf=new father (false)

    this.elemP.appendChild(this.parentm.elemP)
    this.elemP.appendChild(this.parentf.elemP)

    this.randomspace = () => {
    const motherheight=Math.random()*(height-spacebetween)
    const fatherheight=height-motherheight-spacebetween
    this.motherheight.setheight(motherheight)
    this.fatherheight.setheight(fatherheight)
    }

    this.getX=()=>parseInt(this.element.style.left.split('px')[0])
    this.setX=x=>this.element.style.left=`${x}px`
    this.getwidth=()=>this.element.clientWidth
    this.randomspace()
    this.setX(x)
}

const b= new parents (700,200,400)
document.querySelector('[wm-flappy]').appendChild(b.element)


