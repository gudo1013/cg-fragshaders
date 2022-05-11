#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 texture =  texture(image, texcoord);
    texture.x = round(texture.x * 4.0)/4.0;
    texture.y = round(texture.y * 4.0)/4.0;
    texture.z = round(texture.z * 4.0)/4.0;
    FragColor = texture;
}
