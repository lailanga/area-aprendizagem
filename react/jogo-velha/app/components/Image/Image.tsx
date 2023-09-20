export default function Image() {
    
    const user = {
        name: 'Laiane Langa',
        imageUrl: 'https://github.com/lailanga.png',
        imageSize: 90,
    };

    return (
        <img 
            src={user.imageUrl}
            alt={'Foto de perfil de '  + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
    );
}