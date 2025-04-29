<script>
    const button=document.querySelector('.dropdown-button');
    const menu=document.querySelector('.dropdown-content');
    .button.addEventListener('click', ()=>{
        content.style.display=content.style.display==='block'?'none':'block';
    });
document.addEventListener('click', (e)=>{
    if(!button.contains(e.target)) && !content.contains(e.target)){
        content.style.display='none';
    }
});
</script>