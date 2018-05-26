class Dom {
    draw(obj) {
        if (document.getElementById(obj.id)) {
            return;
        }

        const node = document.createElement('div');
        node.style.left = obj.x;
        node.style.top = obj.y;
        
        if (obj.id.includes('asteroid')) {
            node.setAttribute('class', 'asteroid');
        }

        if (obj.id.includes('default-rocket')) {
            node.setAttribute('class', 'default-rocket')
        }

        node.setAttribute('id', obj.id);
        document.body.appendChild(node);
    }
}