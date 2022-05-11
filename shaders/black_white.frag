#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 texture = texture(image, texcoord);
    float luminance =  0.299 * texture.x + 0.587 * texture.y + 0.114 * texture.z;
    texture.x = luminance;
    texture.y = luminance;
    texture.z = luminance;
    FragColor = texture;
}
