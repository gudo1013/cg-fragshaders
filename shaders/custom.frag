#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    float sideoffset = min(height * 0.07, width * 0.07);

    float centerdist = sideoffset * 3.0;
    float x = texcoord.x * width;
    float y = texcoord.y * height;
    vec2 vector = vec2(x, y);

    if(x < sideoffset || y < sideoffset || x > width - sideoffset || y > height - sideoffset){
        color.x = 0.0;
        color.y = 0.0;
        color.z = 0.0;
    }
    else if(x < centerdist && y < centerdist && length(vector) > sideoffset* 2.0){
        color.x = 0.0;
        color.y = 0.0;
        color.z = 0.0;
    }
    else{
        float R = color.x;
        float G = color.y;
        float B = color.z;
        float newRed = min(0.393 * R + 0.769 * G + 0.189 * B, 255.0);
        float newGreen = min(0.349*R + 0.686*G + 0.168 * B, 255.0);
        float newBlue = min(0.272 * R + 0.534 * G + 0.131 * B, 255.0);
        color.x = newRed;
        color.y = newGreen;
        color.z = newBlue;
    }
    FragColor = color;
}
